package com.ivarnilsen.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RandomServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setContentType("application/json");
		PrintWriter writer = resp.getWriter();
		Integer value = (int) Math.floor(Math.random() * Integer.parseInt("FFFFFF", 16));
		String hexString = Integer.toHexString(value);
		writer.append(String.format("{\"color\":\"#%s\"}", ("000000" + hexString).substring(hexString.length())));
	}
}
