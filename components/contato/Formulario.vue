<template>
    <div
        class="form bg-gradient-to-br from-primary-400 to-primary-300 p-8 rounded-2xl shadow-xl"
    >
        <h1 class="form__title">Solicite uma Simulação</h1>
        <el-form
            :model="interessado"
            :rules="regras"
            class="grid md:grid-cols-2 gap-x-16 gap-y-2 md:gap-y-10 mx-8 mt-10"
            ref="Formulário"
        >
            <el-form-item prop="nome">
                <span class="form__name">Nome</span>
                <el-input
                    type="text"
                    placeholder="Nome"
                    v-model="interessado.nome"
                ></el-input>
            </el-form-item>
            <el-form-item prop="sobrenome">
                <span class="form__name">Sobrenome</span>
                <el-input
                    type="text"
                    placeholder="Sobrenome"
                    v-model="interessado.sobrenome"
                ></el-input>
            </el-form-item>
            <el-form-item prop="email">
                <span class="form__name">Email</span>
                <el-input
                    type="text"
                    placeholder="Email"
                    v-model="interessado.email"
                ></el-input>
            </el-form-item>
            <el-form-item prop="celular">
                <span class="form__name">Celular</span>
                <el-input
                    placeholder="Celular (apenas números)"
                    v-model.number="interessado.celular"
                    auto-complete="off"
                ></el-input>
            </el-form-item>
            <el-form-item prop="cep">
                <span class="form__name">CEP</span>
                <el-input
                    placeholder="CEP (apenas números)"
                    v-model.number="interessado.cep"
                    auto-complete="off"
                ></el-input>
            </el-form-item>
            <el-form-item class="form__submit md:col-span-2">
                <el-button
                    @click="submitForm(interessado)"
                    style="height:50px;width:90px;"
                    >Enviar</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// import db from "~/assets/fb";
export default {
    data() {
        return {
            interessado: {
                nome: "",
                sobrenome: "",
                email: "",
                celular: "",
                cep: ""
            },
            regras: {
                nome: [
                    {
                        required: true,
                        message: "Por favor, insira seu nome",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        message: "Seu nome deve ter mais de 2 caracteres",
                        trigger: "blur"
                    }
                ],
                sobrenome: [
                    {
                        required: true,
                        message: "Por favor, insira seu sobrenome",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        message: "Seu sobrenome deve ter mais de 2 caracteres.",
                        trigger: "blur"
                    }
                ],
                email: [
                    {
                        required: true,
                        message: "Por favor, insira seu email.",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message:
                            "Por favor, insira um endereço de email válido.",
                        trigger: ["blur", "change"]
                    }
                ],
                celular: [
                    {
                        required: true,
                        message:
                            "Por favor, insira seu celular para entrarmos em contato.",
                        trigger: "blur"
                    },
                    {
                        type: "number",
                        message: "Celular inválido.",
                        trigger: "blur"
                    }
                ],
                cep: [
                    {
                        required: true,
                        message: "Por favor, insira seu CEP.",
                        trigger: "blur"
                    },
                    {
                        type: "number",
                        message: "CEP inválido.",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods: {
        // submitForm() {
        //     // Aplica as regras e valida o formulário
        //     this.$refs.Formulário.validate(valid => {
        //         if (valid) {
        //             // Adiciona o interessado na coleção
        //             db.collection("clientes")
        //                 .add(this.interessado)
        //                 .then(
        //                     alert("Sucesso! Em breve entraremos em contato!"),
        //                     this.$refs.Formulário.resetFields()
        //                 );
        //         } else {
        //             alert("Ocorreu um erro ao processar suas informações.");
        //             return false;
        //         }
        //     });
        // }
    }
};
</script>
