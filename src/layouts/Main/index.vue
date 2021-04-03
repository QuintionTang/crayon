<template>
    <!-- [ Layout wrapper ] Start -->
    <div class="rwc-layout-wrapper">
        <div class="rwc-layout-inner">
            <div
                id="layout-sidenav"
                class="rwc-layout-sidenav sidenav sidenav-vertical bg-white"
            >
                <div class="app-brand demo">
                    <span class="app-brand-logo rwc-brand">
                        <img
                            src="/assets/images/logo-dark.png"
                            alt="Crayon Logo"
                            class="img-fluid"
                        />
                    </span>

                    <a
                        href="javascript:"
                        class="layout-sidenav-toggle sidenav-link text-large ml-auto"
                    >
                        <i class="ion ion-md-menu align-middle"></i>
                    </a>
                </div>
                <div class="sidenav-divider mt-0"></div>

                <!-- Links -->
                <ul class="sidenav-inner">
                    <!-- Dashboards -->
                    <li class="sidenav-item open active">
                        <a
                            href="javascript:"
                            class="sidenav-link sidenav-toggle"
                        >
                            <i class="sidenav-icon feather icon-home"></i>
                            <div>仪表盘</div>
                            <div class="pl-1 ml-auto">
                                <div class="badge badge-danger">Hot</div>
                            </div>
                        </a>
                        <ul class="sidenav-menu">
                            <li class="sidenav-item active">
                                <a
                                    href="/dashboard/default"
                                    class="sidenav-link"
                                >
                                    <div>默认</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="rwc-layout-container">ddd</div>
        </div>
    </div>
</template>
