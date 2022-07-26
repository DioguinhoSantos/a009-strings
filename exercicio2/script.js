const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
let minhaStringCorrigida = minhaString.trim();

console.log(`tamanho minha string: ${minhaString.length} letras`);
console.log(`tamanho minha string corrigida: ${minhaStringCorrigida.length} letras`);

let minhaStringAlterada = minhaString.replace('________','sticioso');

console.log(minhaStringAlterada);

