const toCreateAlunos = (model) => {
    return `INSERT INTO alunos VALUES ("${model.id}","${model.nome}","${model.nascimento}")`;
}

const toReadAllAlunos = () => { 
    return "SELECT * FROM alunos";
}

const toUpdateAlunos = (model) => {
    return `UPDATE alunos SET 
                id = '${model.id}',
                nome = '${model.nome}'
                nascimento = '${model.nascimento}';
                WHERE id = ${model.id}`;
}



const toDeleteAlunos = (model) => {
    return `DELETE FROM alunos WHERE id=${model.id}`;
}



module.exports = {
    toCreateAlunos,
    toReadAllAlunos,
    toUpdateAlunos,
    toDeleteAlunos
  
}