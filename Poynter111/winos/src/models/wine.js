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


  this.find = find;
  this.findById = findById;
  this.removeById = removeById;
  this.create = create;
  this.updateById = updateById;
}

export default Wine;
