<!DOCTYPE html>
<html lang="en">
<head>
  @include('partials.head')
</head>
<body>

  @include('partials.appBar')
  <main>
    @yield('main')
  </main>

  @include('partials.scripts')
</body>
</html>