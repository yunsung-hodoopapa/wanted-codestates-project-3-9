export const copy = () => {
  const el = document.createElement('input');
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('주소를 클립보드에 복사했습니다.');
};

export const exactPathCopy = path => {
  const el = document.createElement('input');
  const mainAddress = window.location.href;
  const query = `/detail/${path}`;
  el.value = `${mainAddress}${query}`;
  console.log(el.value);
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('주소를 클립보드에 복사했습니다.');
};
