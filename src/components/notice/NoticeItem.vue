<template>
<div class="accordion-item">
  <h2 class="accordion-header" id="heading-${num}">
    <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-${num}"
            aria-expanded="false"
            aria-controls="collapseOne"
    >
      ${title}
    </button>
  </h2>
  <div id="collapse-${num}" class="accordion-collapse collapse" aria-labelledby="heading-${num}" data-bs-parent="#notice-list">
    <div class="accordion-body">

      <div class="row">
        ${content}
      </div>
<c:if test="${sessionScope.user.id=='admin123'}">
  <div class="row">
    <a type="button" class="btn btn-primary me-1 mt-3" href="/notice/delete?num=${num}">삭제</a>
  </div>
</c:if>



    </div>
  </div>
</div>

	
</template>

<script>
	export default {};
</script>
