<h1>Welcome to the express views</h>
     <p>
    <%= message%>  </p>

 <% for(let i = 0; i < 5; i++){%>
    <p>Item<%= i + 1 %></p>
     <%} %>

 <% messages.forEach(message=>{%>
 <h1><%= message %></h1>
 <%}) %>


<% htmls.forEach(html=>{%>
    <h1><%= html %></h1> // tag me print krega
  <h1><%- html %></h1> render kr dega
<%}) %>
