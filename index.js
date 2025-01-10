document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('btn');
    const jokecontent = document.getElementById('jokecontent');
    
    button.onclick = () => {
        axios.get('https://official-joke-api.appspot.com/random_joke')
            .then(function (response) {
                button.textContent='Next';
                jokecontent.innerHTML=response.data.setup;
                setTimeout(function () {
                    jokecontent.textContent = response.data.punchline;
                }, 4000);
            })
            .catch(function (error) {
                console.error('Error fetching joke:', error);
                jokecontent.textContent = 'Failed to load joke. Please try again.';
            });
    };
});
