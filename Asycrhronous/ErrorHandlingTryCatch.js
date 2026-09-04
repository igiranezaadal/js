//cant open file
//loose connection over internet or server
//type error 
//inputing incorrect
// try{
//     console.lag('d');
// }

// catch(error){
//     console.log(error)
// }
// finally{
//     console.log('this always excutes')
// }



// async function getTimeline() {
//   try {
//     const user = await fetchUser(1);
//     const posts = await fetchPosts(user.id);
//     console.log(posts);
//     console.log("complete");
//   } catch (err) {
//     console.error(err);
//   }
// }



async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error("Failed to retrieve user data:", error.meassage);
  } 
  finally {
    console.log("Fetch attempt completed.");
  }
}

fetchUserData(123);