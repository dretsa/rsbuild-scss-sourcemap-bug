import './index.scss';
import './another.scss';

document.querySelector('#root').innerHTML = `
<div class="alert alert-danger m-5 another-file" role="alert">
  All sourcemaps are coming from index.scss
</div>
`;
