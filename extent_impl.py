import os
import jpype as jp
import jpype.imports
from jpype.types import *

extent = os.path.join(os.getcwd(), "../", "jars", "Extent.jar")

classpath = os.pathsep.join((extent))

#start JVM
jpype.startJVM(classpath = [extent])

Extent = jp.JClass("reporter.ExtentReport")

extent_reports = Extent()

extent_reports.init("extentReport.html")

extent_reports.initTest("sdadasdas")

f = open(os.path.join(os.getcwd(), "Samples", "CLAIM_DIM_CLM_Data_Compared_0804_151027.txt"), 'r').read()

extent_reports.datacompyReport(f)

extent_reports.flushTest()

extent_reports.flush()