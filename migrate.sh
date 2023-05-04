#!/bin/bash

echo "Tem certeza que deseja limpar o banco?"
echo "(S/N)"
read resp
lower=$(echo "${resp}" | tr '[:upper:]' '[:lower:]')
if [ "${lower}" != 's' ]; then
echo "Ok, Cancelando ..."
exit 0 ;
else
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
#npx sequelize-cli db:seed:all

echo 'Migração completa!'
fi