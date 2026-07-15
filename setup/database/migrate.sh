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
DB_SRC=/srv/$APP/database.sql
DB_DEST=/var/lib/postgresql/database.sql

mkdir -p $PATH_BACKUP
cp $DB_SRC $DB_DEST

echo "Начинаю миграцию базы данных..."

sudo -iu $DB_USER pg_dump $DB --clean --if-exists > $PATH_BACKUP/$BACKUP || true
echo "backup $DB-$(date +%Y-%m-%d) dumped"

sudo -iu $DB_USER dropdb $DB --if-exists --force
echo "database $DB dropped"

sudo -iu $DB_USER createdb $DB
echo "database $DB created"

sudo -iu $DB_USER psql -d $DB -f $DB_DEST > /dev/null
echo "database $DB deploy"
