# API para cadastro de motorista e veículos

# Instalação

Na pasta raíz do projeto execute `npm install`
para instalar as dependências

# Para iniciar

Execute `npm start`

# Para finalizar

Execute o script `CRTL + C` na pasta raíz

## Driver CRUD

# Para incluir motorista

Insira os dados no payload na rota http://localhost/api/driverCreate
{
"driverName": "",
"lastName": "",
"cpf": "",
"birthDate": "YYYY-MM-DD"
}

# Para atualizar os dados do motorista

Insira qualquer um dos dados abaixo no payload na rota http://localhost/api/driverUpdate/:driverID
{
"active": "false ou true" por padrão está como true
"driverName": "",
"lastName": "",
"cpf": "",
"birthDate": "YYYY-MM-DD"
}

# Para listar os dados e motoristas cadastrados

Acesse a rota http://localhost/api/drivers

# Para apagar o motorista cadastrado

Acesse a rota http://localhost/api/driverDelete/:driverId

# Para incluir id do veículo nos dados do motorista cadastrado

Insira o id do veículo no payload aa rota http://localhost/api/inputVehicle/:driverId
{
"vehiclesId": "id"
}

## Vehicle CRUD

# Para incluir veículo

Insira os dados no payload na rota http://localhost/api/vehicleCreate
{
"ownerName": "Proprietário",
"plateLicense": "placa",
"renavamNumber": "renavam"
}

# Para atualizar os dados do veículo

Insira qualquer um dos dados abaixo no payload na rota http://localhost/api/vehicleUpdate/:vehicleID
{
"ownerName": "Proprietário",
"plateLicense": "placa",
"renavamNumber": "renavam"
}

# Para listar os veículos cadastrados

Acesse a rota http://localhost/api/vehicles

# Para apagar o veículo cadastrado

Acesse a rota http://localhost/api/vehicleDelete/:vehicleId
