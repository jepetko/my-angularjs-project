<%
	if (session.getAttribute("login") == null) {
		response.sendRedirect("login.html");
	}

	String login = null;
	String sessID = null;
	Cookie[] cookies = request.getCookies();
	if (cookies != null) {
		for (Cookie cookie : cookies) {
			if (cookie.getName().equals("login"))
				login = cookie.getValue();
			if (cookie.getName().equals("JSESSIONID"))
				sessID = cookie.getValue();
		}
	} else {
		login = (String) session.getAttribute("login");
		sessID = session.getId();
	}
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Employee Points 1.0</title>
		<link type="text/css" rel="stylesheet" href="css/common.css">
				     
		<script src="js/jquery-1.11.1.min.js"></script>				    				     
		<script src="js/angular.js"></script>
		<script src="js/angular-cookies.js"></script>
		
		<script src="js/app-n/shared/sharedServices.js"></script>
		<script src="js/app-n/users/UsersController.js"></script>		
		<script src="js/app-n/app.js"></script>
		<script src="js/app-n/application.js"></script>
		
	</head>
	<body id="mainApp">	
		<div data-ng-controller="UsersController" data-ng-init="init('<%=login%>', '<%=sessID%>')">
			{{currentUser}}
		</div>		
	</body>
</html>