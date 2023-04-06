/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/



enum Role{
    ADMIN = "Admin",
    NORMAL = "Normal"
  }

type Person = {
    id: String,
    name: string,
    email: string,
    password: string,
    role: Role
  }

  type AdminAccount = {
    account: string | number,
    permission: boolean
  }
  
  type NormalAccount = {
    account: string | number,
    permission: boolean
  }


/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 

  //2.2
type AdminUser = Person & AdminAccount

const userAdmin: AdminUser = {
  id: "03",
  name: "Leticia",
  email: "lerticiacorreia2500@gmai.com",
  password: "12345678",
  role: Role.ADMIN,
  account: "admin1",
  permission: true

}

type NormalUser = Person & NormalAccount

const userNormal: NormalUser = {
  id: "04",
  name: "Gabriel",
  email: "smenndes.98@gmail.com",
  password: "87654321",
  role: Role.NORMAL,
  account: "normal1",
  permission: false
}


const normalAccountArray:NormalUser[] = []
normalAccountArray.push(userNormal)

const adminAccountArray:AdminUser[] = []
adminAccountArray.push(userAdmin)

type unionTypeToArray = NormalUser | AdminUser
const arrayUsers: unionTypeToArray[] = []
arrayUsers.push(userAdmin)
arrayUsers.push(userNormal)

console.table(adminAccountArray)
console.table(normalAccountArray)
console.table(arrayUsers)