<!DOCTYPE html>
<html lang="en">
<head>
  @if (str_contains(url()->current(), 'admin'))
    @include('admin.partials.head')
  @else
    @include('main.partials.head')
  @endif
</head>
<body>
  @if (str_contains(url()->current(), 'admin'))
    <div id="app">
      @include('admin.partials.sidebar')
      <main id="main">
        @yield('main')
      </main>
      @include('admin.partials.footer')
      @include('admin.partials.scripts')
    </div>  
  @else
    @include('main.partials.appBar')

    <main class="mt-5">
      @yield('main')
    </main>
    @include('main.partials.scripts')

  @endif

</body>
</html>