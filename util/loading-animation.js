const Animation = {
    showLoadingAnimation() {
        const loading = document.querySelector('.loading-animation');
        loading.style.display = 'block';
    },
    
    hiddenLoadingAnimation() {
        const loading = document.querySelector('.loading-animation');
        loading.style.display = 'none';
    }
}

export default Animation;