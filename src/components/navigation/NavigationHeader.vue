<template>

<header class="header-global">
    <nav id="navbar-main" aria-label="navigation"
         class="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-dark  bg-primary">
        <div class="container position-relative">
            <a class="navbar-brand me-lg-5" href="/main">
                <img class="navbar-brand-dark" src="/assets/img/brand/light.svg" alt="Logo light">
                <img class="navbar-brand-light" src="/assets/img/brand/dark.svg" alt="Logo dark">
            </a>
            <div class="navbar-collapse collapse me-auto" id="navbar_global">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <a href="/main">
                                <img src="/assets/img/brand/dark.svg" alt="Themesberg logo">
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <a href="#navbar_global" class="fas fa-times" data-bs-toggle="collapse"
                               data-bs-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                               title="close" aria-label="Toggle navigation"></a>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                    <li class="nav-item"><a href="/notice/list" class="nav-link">Notice</a></li>
                    <li class="nav-item"><a href="/trip/list" class="nav-link">Trips</a></li>
                    <li class="nav-item"><a href="/hotPlace/list" class="nav-link">Blog</a></li>
                </ul>
            </div>
            <div class="d-flex align-items-center">

              <div v-if="token==null">
                <a href="/account/login" target="_blank"
                           class="btn btn-outline-gray-100 d-none d-lg-inline me-md-3">
                            Sign In</a>
                        <a href="/account/register" target="_blank" class="btn btn-tertiary">
                            <i class="fa-solid fa-right-to-bracket"></i> Sign Up </a>
                        <button class="navbar-toggler ms-2" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                  </div>
                <div v-else>
                        <a href="/account/info" target="_blank"
                           class="btn btn-outline-gray-100 d-none d-lg-inline me-md-3">
                                ${user.id}님 유저정보 바로가기</a>
                        <a href="/account/logout" target="_blank" class="btn btn-tertiary"  @click="logout">
                            <i class="fa-solid fa-right-to-bracket"></i> Sign Out </a>
                        <button class="navbar-toggler ms-2" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                      </div>

            </div>
        </div>

  </nav>

</header>

</template>

<script>
// import hppt from "@/router";

// import { RouterLink } from "vue-router";

// export default { components: { router } };
</script>
<style></style>
