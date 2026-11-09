function userForm(req,resp){
resp.write(`
    <form action="/submit" method="post">
      <input type="text" placeholder="Enter your name" name="name" />
      <input type="text" placeholder="Enter your email" name="email" />
      <button>submit</button>
    </form>


    `)
}

module.exports= userForm;