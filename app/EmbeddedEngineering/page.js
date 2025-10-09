export const metadata = {
    title: "Embedded Engineering — Robot Control System",
    description:
        "Technical documentation for an Embedded Robotics Control System integrating microcontroller firmware, Node.js bridge communication, and remote app interaction.",
};

export default function EmbeddedEngineeringPage() {
    return (
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen text-slate-100">
            {/* Hero Section */}
            <section className="relative py-16 text-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
                    <div className="absolute top-20 right-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>

                <div className="relative z-10 px-4">
                    <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 bg-clip-text text-transparent">
                        Embedded Robotics Control System
                    </h1>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
                        A full-stack embedded system integrating firmware, Node.js bridge communication, and app-based robot control.
                    </p>
                </div>
            </section>

            {/* Technical Paper Content */}
            <section className="mx-auto max-w-4xl px-4 pb-20 text-slate-200">
                <article className="space-y-12">
                    {/* 1 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
                        <p>
                            This project demonstrates a complete embedded engineering workflow, connecting hardware, firmware, and software layers to control a mobile robot.
                            Commands are sent from a web or mobile application, processed by a Node.js bridge, and executed by the robot’s onboard microcontroller.
                        </p>
                        <p>
                            The system includes lighting control, motor direction, and speed regulation, showcasing real-time hardware integration and communication.
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. System Architecture</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Firmware:</strong> AlgoC (C-based language for microcontrollers)</li>
                            <li><strong>Bridge:</strong> Node.js + WebSocket + Serial communication</li>
                            <li><strong>App Layer:</strong> Sends commands like <code>FORWARD</code>, <code>LIGHT_ON</code>, etc.</li>
                            <li><strong>Hardware:</strong> Robot with DC motors, LED lights, and motion controller</li>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Communication Flow</h2>
                        <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-auto text-sm">
{`App → Bridge (WebSocket)
Bridge → Microcontroller (Serial)
Microcontroller → Executes motor/light actions
Microcontroller → Sends feedback logs
`}
                        </pre>
                        <p>
                            The bridge acts as a protocol translator, ensuring messages from the app are parsed, sanitized, and sent to the hardware at 115200 baud.
                        </p>
                    </div>

                    {/* 4 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Example Firmware</h2>
                        <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-auto text-sm">
{`#include <algoC.h>

void application(ALGOC_APP) {
  // Move forward for 3 seconds
  motor(A, 80, CW);
  delay(3000);
  motor(A, 0, CW);
  
  // Turn light on
  light(1, ON);
}
`}
                        </pre>
                        <p>
                            This program demonstrates direct hardware control via AlgoC SDK — managing motor direction, speed, and LED lighting.
                        </p>
                    </div>

                    {/* 5 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Bridge Implementation</h2>
                        <p>
                            The Node.js bridge interprets commands received through WebSocket and sends them over serial to the robot. Example:
                        </p>
                        <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-auto text-sm">
{`→ Comando: FORWARD
← Robot: Control the motor [A]. Direction [-1], Power [5]
→ Comando: LIGHT1_ON
← Robot: LED channel 1 activated
`}
                        </pre>
                        <p>
                            This layer ensures reliable communication between asynchronous app events and the synchronous nature of embedded serial commands.
                        </p>
                    </div>

                    {/* 6 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Key Learning Areas</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Serial communication protocol design</li>
                            <li>Node.js integration with embedded systems</li>
                            <li>Microcontroller firmware development in C</li>
                            <li>App-to-hardware command synchronization</li>
                            <li>Real-time debugging and feedback via serial logs</li>
                        </ul>
                    </div>

                    {/* 7 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Future Improvements</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Add sensor feedback and obstacle detection</li>
                            <li>Implement bidirectional WebSocket communication for live telemetry</li>
                            <li>Include PID motor control and speed calibration</li>
                            <li>Design a cross-platform mobile interface</li>
                        </ul>
                    </div>

                    {/* 8 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">8. Conclusion</h2>
                        <p>
                            This project illustrates the essence of Embedded Engineering: merging hardware, firmware, and software to create a responsive and intelligent robotic system.
                            The solution provides a strong foundation for IoT-enabled robotics and real-time control platforms.
                        </p>
                    </div>

                    {/* Appendix */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Appendix: Repository</h2>
                        <p>
                            Coming soon — the project repository and demo setup instructions.
                        </p>
                    </div>
                </article>
            </section>
        </div>
    );
}
