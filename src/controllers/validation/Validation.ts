import * as yup from "yup";

let idValidation = yup.object({
  id: yup.string().required(),
});

let empresaValidation = yup.object({
  cnpj: yup.string().required().min(14).max(14),
  nome: yup.string().required().min(3),
  endereco: yup.string().nullable(),
});

let funcionariosValidation = yup.object({
  cpf: yup.string().required().min(11).max(11),
  nome: yup.string().required().min(3),
  matricula: yup.string().nullable(),
  cracha: yup.string().nullable(),
  empresaID: yup.string().required(),
});

let campanhaValidation = yup.object({
  nome: yup.string().required().min(3),
  descricao: yup.string().required(),
  dataInicio: yup.string().required(),
  dataFim: yup.string().required(),
  empresaID: yup.string().required(),
});

let entregasValidation = yup.object({
  data_entrega: yup.string().required(),
  quantidade: yup.number().positive().integer(),
  funcionariosID: yup.string().required(),
  campanhaID: yup.string().required(),
});

let userValidation = yup.object({
  nome: yup.string().required().min(3),
  password: yup.string().required('Password is required').min(5, 'Your password is too short.'),
  email: yup.string().required().email()
})

export {
  empresaValidation,
  idValidation,
  entregasValidation,
  funcionariosValidation,
  campanhaValidation,
  userValidation
};

