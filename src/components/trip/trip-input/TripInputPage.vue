<template>
    <main>
    <section class="section-header pb-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 text-center"><h2 class="display-2 mb-3">나만의 여행지를</h2>
                </div>
            </div>
            </div>
    </section>

    <section class="section section-lg pt-6">
        <div class="container">
            <div class="row justify-content-center mb-5 mb-lg-6">
                <div class="col-12 col-lg-8">
                    <div class="card border-0 p-2 p-md-3 p-lg-5">
                        <div class="card-body px-0 pt-0">
                            <form action="/trips" method="post">
                                <div class="mb-4">
                                  <label for="name">핫플 이름</label>
                                    <div class="input-group">
                                      <input type="text" class="form-control" placeholder="핫플 이름을 입력해주세요" id="name" required name="title">
                                    </div>
                                </div>
                                <!-- 시도 코드, 구군코드 입력 페이지 추가 -->
                                <div class="mb-4">
                                    <label for="name">핫플 주소</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="핫플 주소를 입력해주세요" id="address" required name="address">
                                    </div>
                                </div>
                                
                                <div id="map" style="width: 100%; height: 400px"></div>

                                <div class="mb-4"><label for="overview">핫플 상세 설명</label>
                                    <textarea placeholder="Your message" class="form-control"
                                              id="overview" rows="4" name="overview" required></textarea></div>
                                <div class="d-grid">
                                    <button type="submit" class="btn rounded btn-secondary">Send
                                        message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </section>

</main>

</template>
