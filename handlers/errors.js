
module.exports = (client) => {
process.on("beforeExit", (code) => {
  console.log("[AntiCrash] | [BeforeExit_Logs] | [Start] : ===============");
  console.log(code);
  console.log("[AntiCrash] | [BeforeExit_Logs] | [End] : ===============");
});

process.on("exit", (error) => {
  console.log("[AntiCrash] | [Exit_Logs] | [Start]  : ===============");
  console.log(error);
  console.log("[AntiCrash] | [Exit_Logs] | [End] : ===============");
});
process.on("unhandledRejection", async (reason, promise) => {
  console.log("[AntiCrash] | [UnhandledRejection_Logs] | [start] : ===============");
  console.log(reason);
  console.log("[AntiCrash] | [UnhandledRejection_Logs] | [end] : ===============");
});
process.on("rejectionHandled", (promise) => {
  console.log("[AntiCrash] | [RejectionHandled_Logs] | [Start] : ==============="
  );
  console.log(promise);
  console.log("[AntiCrash] | [RejectionHandled_Logs] | [End] : ===============");
});
process.on("uncaughtException", (err, origin) => {
  console.log("[AntiCrash] | [UncaughtException_Logs] | [Start] : ===============");
  console.log(err);
  console.log("[AntiCrash] | [UncaughtException_Logs] | [End] : ===============");
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  // Needed
  console.log("[AntiCrash] | [UncaughtExceptionMonitor_Logs] | [Start] : ==============="
  );
  console.log(err);
  console.log(
    "[AntiCrash] | [UncaughtExceptionMonitor_logs] | [End] : ===============");
});
  process.on("warning", (warning) => {
        // If You Want You Can Use
        console.log("[AntiCrash] | [Warning_Logs] | [Start] : ===============");
        console.log(warning);
        console.log("[AntiCrash] | [Warning_Logs] | [End] : ===============");
    });
     
process.on('SIGINT', () => { // If You Want You Can Use
      console.log('☆・[AntiCrash] | [SIGINT]・☆');
     });



    }