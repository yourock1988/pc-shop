if [ "$EUID" -ne 0 ]; then
  echo "Пожалуйста, запустите этот скрипт с правами суперпользователя (sudo)." >&2
  exit 1
fi


set -e


USER=webmaster
GROUP=developers


echo "SHELL=/bin/bash" >> /etc/default/useradd
echo -e '\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> /home/webmaster/.profile
echo "SystemMaxUse=50M" >> /etc/systemd/journald.conf
systemctl restart systemd-journald


useradd -m -s /bin/bash $USER
groupadd $GROUP
usermod -aG $GROUP $USER
chgrp $GROUP /srv
chmod -R 775 /srv


apt update
apt upgrade
systemctl daemon-reload
apt install -y git
apt install -y nginx
apt install -y postgresql
apt install -y snapd
snap install --classic certbot

sudo -iu webmaster bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash'
sudo -iu webmaster nvm install 22.11.0
sudo -iu webmaster nvm alias default 22.11.0

ln -s -f /snap/bin/certbot /usr/bin/certbot
sudo -iu postgres psql -c "ALTER USER postgres WITH PASSWORD 'postgres1';"

cd /srv

git clone https://github.com/yourock1988/pc-shop.git

chown -R $USER /srv
chgrp -R $GROUP /srv
chmod -R 775 /srv 

cd /srv/pc-shop

bash deploy-app.sh
