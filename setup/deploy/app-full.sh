if [ "$EUID" -ne 0 ]; then
  echo "Пожалуйста, запустите этот скрипт с правами суперпользователя (sudo)." >&2
  exit 1
fi


set -e


USER=webmaster
APP=pc-shop
DOMAIN=$APP.web-app.click
PORT=8802

echo "Настройка nginx..."
cat << EOF > /etc/nginx/sites-available/$DOMAIN
server {
    listen 80;
    server_name $DOMAIN;
    location /assets/ {
        alias /srv/$APP/dist/client/assets/;
        add_header Cache-Control "public, max-age=31536000";
        try_files \$uri \$uri/ =404;
    }
    location /static/ {
        alias /srv/$APP/dist/server/static/;
        add_header Cache-Control "public, max-age=31536000";
        try_files \$uri \$uri/ =404;
    }
    location / {
        proxy_pass http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host \$host;
    }
}
EOF
ln -s -f /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/$DOMAIN
nginx -s reload
echo "Nginx успешно настроен."


echo "Настройка certbot..."
certbot --nginx -d $DOMAIN --non-interactive --redirect --agree-tos --email admin@$DOMAIN
nginx -s reload
echo "Certbot успешно настроен."


echo "Настройка сервиса..."
systemctl disable $APP.service || true
systemctl stop $APP.service || true
cat << EOF > /etc/systemd/system/$APP.service 
[Unit]
After=network-online.target
###
Description=app $APP for domain $DOMAIN
[Service]
WorkingDirectory=/srv/$APP
Environment=PATH=/usr/local/bin:/usr/bin:/bin
Group=$USER
User=$USER
###
Restart=always
ExecStart=bash -c '. ~/.nvm/nvm.sh; npm start'
Environment=NODE_ENV=production
[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload
echo "Сервис успешно настроен."


source ./setup/deploy/app.sh
