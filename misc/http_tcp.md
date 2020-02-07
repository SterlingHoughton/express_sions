# TCP / UDP

_The cloud is someone else's computer._

What's actually getting passed around is packets - little streams of data. Data gets passed back and forth between client/server, server/server etc. Data is in the form of packets.

You're responsible for handling requests and responses (when you design a server).

5 layers in every passing of packet:
5.Application - HTTP/FTP/SSH/SMTP
4.Transport - TCP/UDP
3.Network IP
2.Data Link - wifi, ethernet
1.Physical - cables

Layer 3 + 5 together =TCP/IP

Express handles ONLY HTTP requests. HTTP uses the transport layer (TCP).

The transport layer creates [2^16] ports on a CPU = roughly 65k

Transport layer - segment, segment has metadata with destination and source port.

Transport Layer Protocols - TCP / UDP
- UDP
	- Lightweight and FAST
	- 8 bytes for a header (tiny)
	- Connectionless (no connection needs to be established, you can just start sending data)
	- Consistency 
		- Sends data no matter what (depends on what you need, can be good or bad)
	- Doesn't care about packet loss. Will keep sending if there are errors, could congest the network
	- Packets out of order
	- Video games, real time communication
	- Unreliable
- TCP
	- Connection-Based (3 way handshake. Have to initiate a connection.)
	- Reliable (know the connection is going to happen)
	- Delivery acknowledgement
	- Retransmission (If data isn't recieved, the server will let the client know)
	- In-order packets
	- Congestion Control (If network is overwhelmed, TCP will intentionally introduce latency to not make the problem worse)

TCP/IP get 2 CPU's ready to talk to each other. TCP is the transport layer for HTTP.

# HTTP

- HTTP is only connected when required. Doesn't stay open. Once the request arrives, the connection is closed. When the response is ready connection is re-established.
- Stateless 
	- No Dialogue (machines only know about each other while the connection is open. Only knows about the current connection.)
#### What does a HTTP message look like:
- usually all text) 3 pieces:
- Start line (actually called a start line)
	- Single line, describes the type of request both ways (first line)
		- REQ. - GET /blog http/1.1
		 - RESP. - http/1.1 404 
- header (specifies request or describes the body. k/v pairs)
	 - always a blank line between header and body
- body
	- content (could be an image, binary data, html etc.)
	- GET requests have no body*

In the terminal, arrows pointed > are the request, arrows pointed < are the response.




