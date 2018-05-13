Wine.$inject = ['$http'];

function Wine($http){
  function find(){
    return $http.get('/api/wines');
  }
  function findById(id){
    return $http.get(`/api/wines/${id}`);
  }

  function removeById(id){
    return $http.delete(`/api/wines/${id}`);
  }

  function create(data){
    return $http.post('/api/wines', data);
  }

  function updateById(id, data){
    return $http.put(`/api/wines/${id}`, data);
  }

  function commentCreate(wineId, data){
    return $http.post(`/api/wines/${wineId}/comments`, data);
  }

  function commentDelete(wineId, commentId){
    return $http.delete(`/api/wines/${wineId}/comments/${commentId}`);
  }

  this.find = find;
  this.findById = findById;
  this.removeById = removeById;
  this.create = create;
  this.updateById = updateById;
  this.commentCreate = commentCreate;
  this.commentDelete = commentDelete;
}

export default Wine;
