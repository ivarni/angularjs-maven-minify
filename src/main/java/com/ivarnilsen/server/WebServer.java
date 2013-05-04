package com.ivarnilsen.server;

import org.mortbay.jetty.Server;
import org.mortbay.jetty.webapp.WebAppContext;

public class WebServer {

	public static void main(String[] args) throws Exception {

		Server server = new Server(8080);
		server.addHandler(new WebAppContext("src/main/webapp", "/"));
		server.start();
	}
}
 