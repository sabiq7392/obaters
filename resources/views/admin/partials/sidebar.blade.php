<div id="sidebar" class="active">
  <div class="sidebar-wrapper active">
    <div class="sidebar-header">
      <div class="d-flex justify-content-between">
        <div class="logo">
          <a href="index.html">
            <img 
              src="{{ asset('img/logo.png') }}" 
              alt="Obaters" 
            />
          </a>
        </div>
        <div class="toggler">
          <a href="#" class="sidebar-hide d-xl-none d-block">
            <i class="bi bi-x bi-middle"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="sidebar-menu">
      <ul class="menu">
        <li class="sidebar-title">Menu</li>
        
        <li
          class="sidebar-item active ">
          <a href="index.html" class='sidebar-link'>
            <i class="bi bi-grid-fill"></i>
            <span>Dashboard</span>
          </a>
        </li>
        
        <li class="sidebar-title">Forms &amp; Tables</li>
        
        <li
          class="sidebar-item  ">
          <a href="table.html" class='sidebar-link'>
            <i class="bi bi-grid-1x2-fill"></i>
            <span>Table</span>
          </a>
        </li>
        
        <li class="sidebar-item ">
          <a href="table-datatable.html" class="sidebar-link">
            <i class="bi bi-file-earmark-spreadsheet-fill"></i>
            <span>Datatable</span>
          </a>
        </li>

        <li class="sidebar-title">Pages</li>
        
        <li
          class="sidebar-item  ">
          <a href="application-checkout.html" class='sidebar-link'>
            <i class="bi bi-basket-fill"></i>
            <span>Checkout Page</span>
          </a>
        </li>
        
        <li
          class="sidebar-item  has-sub">
          <a href="#" class='sidebar-link'>
            <i class="bi bi-person-badge-fill"></i>
            <span>Authentication</span>
          </a>
          <ul class="submenu ">
            <li class="submenu-item ">
              <a href="auth-login.html">Login</a>
            </li>
            <li class="submenu-item ">
              <a href="auth-register.html">Register</a>
            </li>
            <li class="submenu-item ">
              <a href="auth-forgot-password.html">Forgot Password</a>
            </li>
          </ul>
        </li>
        
        <li class="sidebar-title">Raise Support</li>
        
        <li
          class="sidebar-item  ">
          <a href="https://zuramai.github.io/mazer/docs" class='sidebar-link'>
            <i class="bi bi-life-preserver"></i>
            <span>Documentation</span>
          </a>
        </li>
        
      </ul>
    </div>
    <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
  </div>
</div>