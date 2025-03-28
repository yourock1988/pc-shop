if [ "$EUID" -ne 0 ]; then
  echo "Пожалуйста, запустите этот скрипт с правами суперпользователя (sudo)." >&2
  exit 1
fi


set -e


DB=pc_shop_v0
DB_USER=postgres
APP=pc-shop
PATH_BACKUP=/var/lib/postgresql/backup
BACKUP=$DB-$(date +%Y-%m-%d).sql
MIGRATION=/srv/$APP/database.sql


echo "Начинаю миграцию базы данных..."

sudo -iu $DB_USER pg_dump $DB > $PATH_BACKUP/$BACKUP
echo "backup $DB-$(date +%Y-%m-%d) dumped"

sudo -iu $DB_USER dropdb $DB
echo "database $DB dropped"

sudo -iu $DB_USER createdb $DB
echo "database $DB created"

sudo -iu $DB_USER psql -d $DB -f $MIGRATION > /dev/null
echo "database $DB deploy"
