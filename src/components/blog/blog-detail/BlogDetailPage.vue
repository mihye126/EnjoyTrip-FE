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
export default {};
</script>
