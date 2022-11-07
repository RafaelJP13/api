 const userValidation = data => {

    if(!data.callerId) return {status: 404, msg:'Informe o parâmetro callerId!'}
    if(!data.nome) return {status: 404, msg:'Informe o parâmetro nome!'}
    if(!data.empresa) return {status: 404, msg:'Informe o parâmetro empresa!'}
    if(!data.permissao) return {status: 404, msg:'Informe o parâmetro permissao!'}
    if(typeof data.nome !== 'string') return {status: 404, msg:'O parâmetro nome deve ser uma string!'}
    if(typeof data.empresa !== 'string') return {status: 404, msg:'O parâmetro empresa deve ser uma string!'}
    if(typeof data.permissao !== 'string') return {status: 404, msg:'O parâmetro permissao deve ser uma string!'}
    if(data.permissao !== 'ADMIN' && data.permissao !== 'USER')  return {status: 404, msg:'O parâmetro permissao deve ser existente no sistema!'}

    return true;
 }
   
 export default userValidation
