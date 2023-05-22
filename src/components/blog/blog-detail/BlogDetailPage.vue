<template>
<main>

<jsp:include page="/views/components/blog/blog-head.jsp" >
    <jsp:param value="${hotPlace}" name="hotPlace"/>
</jsp:include>

<jsp:include page="/views/components/blog/blog-content.jsp" >
    <jsp:param value="${hotPlace}" name="hotPlace"/>
</jsp:include>

<div class="section section-md bg-white text-black pt-0 line-bottom-light">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-8">

                <div>
                    <jsp:include page="/views/components/blog/blog-comment-input.jsp"/>

                    <div class="mt-5">
                        <jsp:include page="/views/components/blog/blog-comment.jsp"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</main>

</template>

<script>

Vue.component('blog-title', {
  // JavaScript에서의 camelCase
  props: ['blog'],
  template: 
  `<section class="section-header pb-5">
    <div class="container">
        <div class="row bg-img card text-white">
            <div class="col-12 mt-5 ">
                <div class=" mb-6">
                    <div class="card-body px-5 py-5 text-center">
                        <div class="row align-items-center">
                            <div class="col">
                                <h2 class="mb-3">{{blog.title}}</h2>
                            </div>
                            <div class="mb-4">
                                <div class="badge bg-success text-uppercase me-2 px-3">${blog.contentTypeID}</div> </div>
                            <div class="post-meta"><span class="fw-bold me-3">작성자: ${blog.userName}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
})

Vue.component('blog-share', {
  // JavaScript에서의 camelCase
  props: ['blog'],
  template: 
  `  <div class="row justify-content-sm-center align-items-center py-3 mt-3">
    <div class="col-12 col-lg-8">
        <div class="row">
            <div class="col-9 col-md-6">
                <h6 class="fw-bolder d-inline mb-0 me-3">Share:</h6><button
                    class="btn btn-sm me-2 btn-icon-only btn-pill btn-twitter d-inline text-white"
                    aria-label="twitter social link"><span class="fab fa-twitter"></span></button>
                <button class="btn btn-sm me-2 btn-icon-only btn-pill btn-facebook d-inline"
                        aria-label="facebook social link"><span class="fab fa-facebook-f"></span></button>
                <button class="btn btn-sm btn-icon-only btn-pill bg-orange d-inline text-white"
                        aria-label="reddit social link"><span class="fab fa-reddit-alien"></span></button>
            </div>
            <div class="col-3 col-md-6 text-right"><span class="far fa-bookmark text-primary"
                                                         data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                                         data-original-title="Bookmark story" data-bs-original-title="Bookmark story"
                                                         aria-label="Bookmark story"></span></div>
        </div>
    </div>
</div>`
})
export default {};
</script>
