
const templateHeader = document.createElement("template")
const templateBody = document.createElement("template")

templateHeader.innerHTML = `

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
	

`

templateBody.innerHTML = `


<ul class="nav fixed-bottom justify-content-center mt-5">
  <li class="nav-item">
	<a class="nav-link" aria-current="page" href="../todo/">
		<h1><i class="bi bi-check2-square"></i></h1>
	</a>
  </li>
  <li class="nav-item">
	<a class="nav-link" href="#">
		<h1><i class="bi bi-controller"></i></h1>
	</a>
  </li>
  <li class="nav-item">
	<a class="nav-link" href="../profile/">
		<h1><i class="bi bi-person-circle"></i></h1>
	</a>
  </li>
</ul>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>


`

document.getElementsByTagName("head")[0].appendChild(templateHeader.content)

window.onload = function () {
document.body.appendChild(templateBody.content)

}
