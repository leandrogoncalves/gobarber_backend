#! /bin/bash

#Cria migration
yarn sequelize migration:create --name=create-files

#Roda migrations
yarn sequelize db:migrate

#Desfaz migration
yarn sequelize db:migrate:undo

#Desfaz todas as migration
yarn sequelize db:migrate:undo:all