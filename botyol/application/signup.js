const PostData = async (e) => {
    e.preventDefault();

    const { name, email } =
      user;

    const res = await fetch("http://localhost:5000/api/course/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Signup Failed");
    } else {
      window.alert("Course Added Successful");
      navigate("/teacher/courses");
    }
  };