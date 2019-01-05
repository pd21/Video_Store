$(document).ready(function()
{
    $("#insert_video").on('click',function(){
      alert("yeyyy");
      window.location.href = '/videostore/insert';
    })

    $("#fetch_video").on('click',function(){
      alert("fetch");
      window.location.href = '/videostore/fetch'
    })
});
