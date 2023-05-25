<template>
    <main>
        <section class="min-vh-100 d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center text-dark d-flex align-items-center justify-content-center">
                        <div><router-link href="/"><img class="img-fluid w-50" :src="img" alt="girl illustration"></router-link>
                            <h1 class="mt-4">404 Page <span class="fw-bolder text-primary">not found</span></h1>
                            <p class="lead my-4 px-lg-11">Oops! Looks like you followed a bad link. If you think
                                this is a problem with us, please tell us.</p><router-link
                                class="btn btn-primary animate-hover" to="/"><span
                                    class="fas fa-chevron-left me-3 ps-2 animate-left-3"></span>Go back home</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
  
<script>
export default {
    name: "ErrorView",
    data() {
        return {
            img: require("@/assets/img/illustrations/404.svg")
        };
    },
};
</script>
  