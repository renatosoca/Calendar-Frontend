import { addHours } from "date-fns";

export const initialFormLogin = {
  email: '',
  password: '',
};
export const validationsFormLogin = {
  email: [ (email) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(email), 'Tiene que ser un email válido.' ],
  password: [ (password) => password.length > 7, 'La contraseña debe contener un mínimo de 8 caracteres.' ],
};

export const initialFormRegister = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};
export const validationsFormRegister = {
  name: [ (value) => value.length > 2, 'El nombre es obligatorio.' ],
  lastname: [ (value) => value.length > 2, 'El apellido es obligatorio.' ],
  email: [ (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(value), 'Tiene que ser un email válido.' ],
  password: [ (value) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(value), 'Se requiere al menos una mayúscula, una minúscula, un número, un carácter especial y un mínimo de 8 caracteres.' ],
  confirmPassword: [ (value, password) => value === password && value.length > 1, 'Las contraseña no coinciden.' ]
};

export const initialFormForgotPass = {
  email: '',
};
export const validationsFormForgotPass = {
  email: [ (email) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(email), 'Tiene que ser un email válido.' ]
};

export const initialFormResetPass = {
  password: '',
  confirmPassword: '',
};
export const validationsFormResetPass = {
  password: [ (password) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(password), 'Se requiere al menos una mayúscula, una minúscula, un número, un carácter especial y un mínimo de 8 caracteres.' ],
  confirmPassword: [ (confirmPassword, password) => confirmPassword === password, 'Las contraseña no coinciden.' ]
};

export const initialFormCalendar = {
  title: "",
  notes: "",
  start: new Date(),
  end: addHours(new Date(), 1),
};
export const validationsFormCalendar = {
  title: [(title) => title.length > 0, "El titulo es requerido"]
}

export const validationsFormUserProfile = {
  name: [ (value) => value.length > 2, 'El nombre es obligatorio.' ],
  lastname: [ (value) => value.length > 2, 'El apellido es obligatorio.' ],
  email: [ (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(value), 'Tiene que ser un email válido.' ],
}

export const initialFormUserPassword = {
  oldPassword: '',
  newPassword: '',
}
export const validationsFormUserPassword = {
  oldPassword: [ (password) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(password), 'Se requiere al menos una mayúscula, una minúscula, un número, un carácter especial y un mínimo de 8 caracteres.' ],
  newPassword: [ (password) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(password), 'Se requiere al menos una mayúscula, una minúscula, un número, un carácter especial y un mínimo de 8 caracteres.' ],
}