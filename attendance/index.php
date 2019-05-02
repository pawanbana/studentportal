<?php
  session_start();
  $isIndex = 1;
  if(array_key_exists('teacher_id',$_SESSION) && isset($_SESSION['teacher_id'])) {
   header('Location: teacher.php');
  } else {
    if(!$isIndex) header('Location: index.php');
  }
?>
<!DOCTYPE html>
<html>
 <head>
  <link rel="stylesheet" href="css/style.css"/>
  <title>Student Attendance</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootstrap-theme.min.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/login.js"></script>
   <!-- Custom styles for this template -->
    <link href="navbar-fixed-top.css" rel="stylesheet">
 </head>
 <body>
 
 <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
       <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
           <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </button>
         <a class="navbar-brand" href="http://localhost:3201/"></span>NIET</a>
        
       </div>
       <div class="collapse navbar-collapse" id="bs-nav-demo">
       <div class="nav navbar-nav">
       <li><a href="https://pure-atoll-27749.herokuapp.com/">CHAT ROOM</a></li>
       <li><a href="http://localhost/exam/index.php">EXAM</a></li>
       <li><a href="http://localhost/attendance/">ATTENDANCE</a></li>
       <li><a href="http://localhost:8080/placement">PLACEMENT</a></li>
       <li><a href="http://localhost/notesharing/index.php">NOTES</a></li>
       <li><a href="http://localhost:8080">ACTIVITIES/FEST</a></li>
       <li> <a href="student.php"></a></li>
      
 
       </div>
       </div>
     </div>
     </div>
   </nav>
    <!-- Fixed navbar -->
    <!-- <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.php">NIET</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="http://localhost:3201/">Home</a></li>
            <li> <a href="student.php">Student Dashboard</a></li>

          
          </ul>
        </div><!--/.nav-collapse -->
      <!-- </div>
    </nav> --> -->
  <div class="container" style= "margin-top:30px;">
  
    <h2>Teahers</h2>
    <div class="alert alert-warning hidden">
      <span></span>
      <button type="button" class="close" onclick="$('.alert').addClass('hidden');">&times;</button>
    </div>
    <div>
    <div class= "col-md-5">
    <div class ="row">
    <form id="login">
              <div class="form-group">
                <label>Email ID</label>
                <input class="form-control" placeholder="Email" type="email" name="email">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input class="form-control" placeholder="Password" type="password" name="password">
              </div>
              <button class="btn btn-primary pull-right">Login</button>
            </form></div>
         <div class ="row"
         style="margin-top:100px;">
         <h1>
         <a href="student.php">STUDENT DASHBOARD</a></h1>
            </div>
   
    </div>
    <div class ="col-md-2"></div>
    <div class ="col-md-5">
    <form id="signup">
              <div class="form-group">
                <label>Name</label>
                <input class="form-control" placeholder="Name" type="text" name="name">
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input class="form-control" placeholder="Phone" type="text" name="phone">
              </div>
              <div class="form-group">
                <label>Email ID</label>
                <input class="form-control" placeholder="Email" type="email" name="email">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input class="form-control" placeholder="Password" type="password" name="password">
                <span class="help-block">Password should be 6 characters long.</span>
              </div>
              <div class="form-group">
                <label>Re-type Password</label>
                <input class="form-control" placeholder="Re-type Password" type="password" name="password2">
              </div>
              <button class="btn btn-primary pull-right">Sign Up</button>
            </form>
    </div>
    </div>
  </div>
     <!-- FOOTER -->


    </div><!-- /.container -->

 </body>
</html>
