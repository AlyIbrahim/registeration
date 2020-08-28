import org.apache.camel.builder.RouteBuilder;

public class Loader extends RouteBuilder {
    @Override
    public void configure() throws Exception {
           from("undertow:http://0.0.0.0:8080/test?optionsEnabled=true&accessLog=true")
          .to("kafka://registeration")
          .to("log:mylogger?showBody=true");
//          .log("Aly");
   }
}
