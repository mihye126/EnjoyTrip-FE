<template>
    <!-- Form -->
    <form class="row mb-4 mb-lg-5 pt-2" action="/trip/list" method="get">

        <div class="col-3">

            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-text">
                        <i class="fa-solid fa-location-dot"></i></span>
                    <select class="form-select" id="search-area" aria-label="검색 할 지역 선택" name="sidoCode">
                            <option v-for="(sido, index) in sidos" :key="index" :value="`${sido.code}`">{{ sido.name }}</option>

                    </select>
                </div>
            </div>
        </div>

        <div class="col-3">

            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addonDate1">
                        <i class="fa-solid fa-caret-down"></i>
                    </span>
                    <select class="form-select" id="search-content-id" aria-label="검색 할 지역 선택" name="contentTypeID">
                            <option v-for="(contentType, index) in contentTypes" :key="index" :value="`${contentType.contentTypeID}`">{{ contentType.contentTypeName }}</option>                    
                    </select>
                </div>
            </div>
        </div>

        <div class="col-4">

<div class="form-group">
    <div class="input-group">
        <span class="input-group-text" id="basic-addonDate1">
            <i class="fa-solid fa-i-cursor"></i>       
        
        </span>
        <input typr="text" class="form-control" id="search-keyword" placeholder="검색어 입력" name="keyword"/>
    </div>
</div>
</div>
        <div class="col-2">
            <button class="btn btn-warning " type="submit" id="btn-search" style="width: 100%">Search <i
                    class="fa-solid fa-magnifying-glass m-1" style="float: left;"></i></button>
        </div>

    </form>
</template>
    
<script>
export default {
    data() {
        return {
            sidos: [{ name: '서울', code: '1' }, { name: '인천', code: '2' }, { name: '대전', code: '3' }, { name: '대구', code: '4' }, { name: '광주', code: '5' }, { name: '부산', code: '6' }, { name: '울산', code: '7' }, { name: '세종특별자치시', code: '8' }, { name: '경기도', code: '31' }, { name: '강원도', code: '32' }, { name: '충청북도', code: '33' }, { name: '충청남도', code: '34' }, { name: '경상북도', code: '35' }, { name: '경상남도', code: '36' }, { name: '전라북도', code: '37' }, { name: '전라남도', code: '38' }, { name: '제주도', code: '39' }],
            contentTypes: [{ contentTypeID: '12', contentTypeName: '관광지' }, { contentTypeID: '14', contentTypeName: '문화시설' }, { contentTypeID: '15', contentTypeName: '축제공연행사' }, { contentTypeID: '25', contentTypeName: '여행코스' }, { contentTypeID: '28', contentTypeName: '레포츠' }, { contentTypeID: '32', contentTypeName: '숙박' }, { contentTypeID: '38', contentTypeName: '쇼핑' }, { contentTypeID: '39', contentTypeName: '음식점' }]
        }

        },

        };
</script>
    