import React from "react";

import { motion } from "framer-motion";
import { PlusCircle, FileText, AlertCircle } from "lucide-react";
import { formatCurrency } from "src/helper";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

function Dashboard({ setCurrentView, basename, selectedCurrency }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-6 max-w-4xl mx-auto"
    >
      <h2 className="dashboard-welcome text-3xl font-bold mb-6 text-gray-800">
        Welcome, {basename}!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Button
          onClick={() => setCurrentView("createPolicy")}
          className="create-policy-button h-24 text-lg bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-lg shadow-lg"
        >
          <PlusCircle className="mr-2 h-6 w-6" /> Create New Policy
        </Button>
        <Button
          onClick={() => setCurrentView("myPolicies")}
          className="view-policies-button h-24 text-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg shadow-lg"
        >
          <FileText className="mr-2 h-6 w-6" /> View My Policies
        </Button>
      </div>
      <Card className="policy-summary bg-white shadow-xl rounded-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
          <CardTitle className="text-2xl">Policy Summary</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-gray-700">
                Active Policies: <span className="text-green-600">2</span>
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Pending Claims: <span className="text-yellow-600">1</span>
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Total Coverage:{" "}
                <span className="text-blue-600">
                  {formatCurrency(20000, selectedCurrency)}
                </span>
              </p>
            </div>
            <AlertCircle className="h-12 w-12 text-yellow-500" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default Dashboard;
