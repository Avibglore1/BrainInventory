fetchData()
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));


async function run(){
    try {
        const res = await fetchData();
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error)
    }

}
run()