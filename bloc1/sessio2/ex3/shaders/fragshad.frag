#version 330 core

out vec4 FragColor;

void main() {
    FragColor = vec4 (1.);
    int num = int(gl_FragCoord .y)/10;
    if (num % 2 == 0) {
        if ( gl_FragCoord .x < 350.) {
            if (gl_FragCoord .y > 350.)
                FragColor = vec4 (1. ,0. ,0. ,1.);   // vermell
            else FragColor = vec4 (1. ,1. ,0. ,1.);  // groc
        }
        else {
            if (gl_FragCoord .y > 350.)
                FragColor = vec4 (0. ,0. ,1. ,1.);   // blau
            else FragColor = vec4 (0. ,1. ,0. ,1.);  // verd
        }
    }
    else discard;
}

