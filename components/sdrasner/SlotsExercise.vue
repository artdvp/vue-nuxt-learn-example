<template>
    <div class="location-contain">
        <div class="location">
            <div class="place">
                <img :src="img_url" :alt="title_name" width="235" height="300">
                <h2>{{ title_name }}</h2>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['img_url','title_name','description']
}
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
}

.location-contain {
    display:flex;
    justify-content: center;
}

.place {
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 320px;
    justify-content: center;
    background: white;
    border: 1px solid #ddd;
    padding: 20px 20px;
    margin: 10px;
    h2 {
        margin: 0;
        text-align: center;
    }
    img {
        margin: 10px;
        align-self: center;
    }
}
</style>

