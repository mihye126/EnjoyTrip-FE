<template>
    <div class="card shadow bg-white border-gray-300 p-4 rounded">
        <div class="card-body p-0 pt-4">
            <router-link :to="`/blogs/${item.id}`" class="h4">{{item.title}}</router-link>
            <div class="d-flex align-items-center my-3">
                <img class="avatar avatar-sm rounded-circle" src="/assets/img/team/profile-picture-2.jpg"
                    :alt="item.title">
                <h3 class="h6 small ms-2 mb-0">

                </h3>
            </div>
            <p class="mb-0">{{item.title}}</p>
        </div>
    </div>
</template>
    
<script>
export default {
    props:{
        item:Object
    },
    created(){
        console.log(this.item)
    }
};
</script>
    