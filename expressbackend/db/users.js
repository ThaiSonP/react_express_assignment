const db = require ('./index')

const getAllUsers = (req,res)=>{
  db.any('select * from users')
  .then(results=>{
    res.json({
      status: 'success',
      message: 'these are all the users',
      body: results
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getSingleUser = (req,res)=>{
  const id = req.params.id;
  db.one('SELECT * FROM users WHERE id = $1',[id])
  .then(result=>{
    res.json({
      status: 'success',
      message: 'this is ONE user',
      body: result
    })
  }).catch(err=>{
    console.log(err)
  })
}

const postUser = (req,res)=>{
  const body = req.body
  db.none('INSERT INTO users (name) values (${name})',[body])
  .then(result=>{
    res.json({
      status:'success',
      message:'user has been created'
    })
  }).catch(error=>{
    console.log(error)
  })
}

const patchUser = (req, res) =>{
  db.none(
    "UPDATE users SET name=${name} WHERE id = ${id}",
    {
      name:req.body.name,
      id: parseInt(req.params.id)
    }
  )
  .then(()=>{
    res.json({
      status:"success",
      message: 'user has been updated'
    })
  }).catch(err=>{
    console.log(err)
  })

}

module.exports ={
  getAllUsers,
  getSingleUser,
  postUser,
  patchUser
}
