
<?php
  // base url asset
  $ASSETS_BASE_URL = 'themes';
?>

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Admin | {{ $title }}</title>

<link 
  rel="preconnect" 
  href="https://fonts.gstatic.com"
/>

<link 
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" 
  rel="stylesheet"
/>

<link 
  rel="stylesheet" 
  href="{{ asset("$ASSETS_BASE_URL/css/bootstrap.css") }}"
/>

<link 
  rel="stylesheet" 
  href="{{ asset("$ASSETS_BASE_URL/vendors/iconly/bold.css") }}"
/>

<link 
  rel="stylesheet" 
  href="{{ asset("$ASSETS_BASE_URL/vendors/perfect-scrollbar/perfect-scrollbar.css") }}"
/>

<link 
  rel="stylesheet" 
  href="{{ asset("$ASSETS_BASE_URL/vendors/bootstrap-icons/bootstrap-icons.css") }}"
/>

<link 
  rel="stylesheet" 
  href="{{ asset("$ASSETS_BASE_URL/css/app.css") }}"
/>

<link 
  rel="shortcut icon" 
  href="{{ asset("$ASSETS_BASE_URL/images/favicon.svg") }}" 
  type="image/x-icon"
/>