const actionCreate = (types:any, options:object) => {
    return (<any>Object).assign({type: types}, options)
}
export default actionCreate